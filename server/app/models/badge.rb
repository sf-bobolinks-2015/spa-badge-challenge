class Badge < ActiveRecord::Base
  validates :title, presence: true
  belongs_to :nominee
  has_many :votes
end
