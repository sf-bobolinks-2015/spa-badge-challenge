class Badge < ActiveRecord::Base
  belongs_to :student
  has_many :votes

  validates :title, presence: true
end
