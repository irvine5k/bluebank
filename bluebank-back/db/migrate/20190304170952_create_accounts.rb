class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|
      t.string :number
      t.string :agency
      t.float :balance, default: 0.0
      t.references :client, foreign_key: true

      t.timestamps
    end
  end
end
