class Vote < ActiveRecord::Base
  validates :count, presence: true
  belongs_to :badge
end
