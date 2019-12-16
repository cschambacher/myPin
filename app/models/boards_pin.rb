class BoardsPin < ApplicationRecord
    validates :board_id, presence: true 
    belongs_to :author,
    
end
