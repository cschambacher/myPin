class Pin < ApplicationRecord
    validates :url, :title, :description, :author_id, presence: true
    validates :author_id, uniqueness: true

    
end
