class CreateNominees < ActiveRecord::Migration
  def change
    create_table :nominees do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
