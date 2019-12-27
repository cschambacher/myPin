json.extract! board, :id, :title, :private, :author_id
json.pins do
    json.partial! 'api/pins/pin', collection: board.pins, as: :pin
end

# @pokemon.each do |poke|
#   json.set! poke.id do
#     json.extract! poke, :id, :name
#     begin
#       json.image_url asset_path("pokemon_snaps/#{poke.image_url}")
#     rescue
#       json.image_url poke.image_url
#     end
#     json.moves []
#     json.item_ids []
#   end
# end