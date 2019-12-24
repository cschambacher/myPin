class Board < ApplicationRecord
    validates :title, :author_id, presence: true
    validates :private, inclusion: { in: [true, false] }

    belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id

    has_and_belongs_to_many :pins
end
