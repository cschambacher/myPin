json.extract! board, :id, :title, :private, :author_id
json.pins do
    json.partial! 'api/pins/pin', collection: board.pins, as: :pin
end