class Item < ApplicationRecord
  belongs_to :menu
  has_many :users, through: :carts
end
