class CreateBadges < ActiveRecord::Migration
  def change
    create_table :badges do |t|
      t.string :text
      t.integer :vote, :default => 1
      t.references :student

      t.timestamps null: false
    end
  end
end
