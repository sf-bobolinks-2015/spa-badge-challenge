class Student < ActiveRecord::Base
  has_many :badges

  validates :first_name, :last_name, presence: true
end
