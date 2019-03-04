class HomeController < ApplicationController
    def index
        @accounts = Account.all
        render json: @accounts
    end
end