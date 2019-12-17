class Pin < ApplicationRecord
    validates :url, :title, :description, :author_id, presence: true
    validates :author_id, uniqueness: true

    belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id

    has_and_belongs_to_many :boards,
    through: :author,
    source: :pins_in_boards

    has_many :users,
    through: :boards,
    source: :pins_in_boards

end
