class Book < ActiveRecord::Base
  validates :title, presence: true, length: { in: 3..20 }
  validates :price, presence: true, numericality: { only_integer: true, greater_than: 0, less_than: 10_000 }
end
