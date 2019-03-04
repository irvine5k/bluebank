class SigninController < ApplicationController
    before_action :authorized_access_request!, only: [:destroy]

    def create
        client = Client.find_by(email: params[:email])

        if client.authenticate(params: [:password])
            payload = { client_id: client.id }
            
            session = JWTSession::Session.new(payload: payload, refresh_by_access_allowed: true)
            tokens = session.login
            
            response.set_cookie(JWTSessions.access_cookie,
                                value: tokens[:access],
                                httponly: true,
                                secure: Rails.env.production?)
            
            render json: {crsf: tokens[:csrf]}
        else
            not_found
        end
    end

    def destroy
        session = JWTSessions::Session.new(payload: payload)
        session.flush_by_access_payload
        
        render json: ok
    end

    private 

    def not_found
        render json: {error: "Cannot find email/password combination"}, status: :not_found
    end
end