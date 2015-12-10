class Badge < ActiveRecord::Base
  belongs_to :student

  validates :title, presence: true
end
