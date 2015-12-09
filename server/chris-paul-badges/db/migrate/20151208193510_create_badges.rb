class CreateBadges < ActiveRecord::Migration
  def change
    create_table :badges do |t|
      t.text :badge_text
      t.references :student
      t.timestamps null: false
    end
  end
end
