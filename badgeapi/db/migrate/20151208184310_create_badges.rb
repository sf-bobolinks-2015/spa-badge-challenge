class CreateBadges < ActiveRecord::Migration
  def change
    create_table :badges do |t|
      t.string :text
      t.integer :votes, default: 0
      t.integer :teacher_id

      t.timestamps null: false
    end
  end
end
