class Badge < ActiveRecord::Base
  validates :text, presence: true
  belongs_to :teacher
end
