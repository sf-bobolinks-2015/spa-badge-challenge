class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.boolean :upvote?
      t.references :badge
      t.references :student
      t.timestamps null: false
    end
  end
end
