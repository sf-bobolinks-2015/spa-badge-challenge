class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.boolean :value
      t.references :badge
      t.timestamps null: false
    end
  end
end
