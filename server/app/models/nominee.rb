class Nominee < ActiveRecord::Base
  validates :name, presence: true
  has_many :badges
end
