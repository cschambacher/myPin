# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
p "destroying data"
User.destroy_all
Pin.destroy_all
Board.destroy_all
p "seeding data"

u3 = User.create!(
  username: 'guest',
  password: 'password'
)

u1 = User.create!(
  username: 'Nora',
  password: 'nora123'
)

u2 = User.create!(
  username: 'Ria',
  password: 'ria123'
)

b1 = Board.create!(
  title: 'travels',
  private: false,
  author_id: u1.id,
)

b2 = Board.create!(
  title: 'fall',
  private: false,
  author_id: u1.id,
)

p9 = Pin.create!(
  description: 'San Francisco coffee shops are cozy and welcoming',
  title: 'ritual coffee',
  author_id: u1.id,
  url: "pin9.jpg"
)
p2 = Pin.create!(
  description: 'Autumn leaves and colors are the best',
  title: 'Autumn vibes',
  author_id: u1.id,
  url: "pin2.jpg"
)
p3 = Pin.create!(
  description: 'sunset on the Pacific ocean',
  title: 'sunset',
  author_id: u1.id,
  url: "pin3.jpg"
)
p4 = Pin.create!(
  description: 'Sakuras blloming in Japan',
  title: 'Spring blooms',
  author_id: u1.id,
  url: "pin4.jpg"
)

p5 = Pin.create!(
  description: 'somewhere in the irish country',
  title: 'Ireland',
  author_id: u1.id,
  url: "pin5.jpg"
)

p6 = Pin.create!(
  description: 'Bucharest streets in winter',
  title: 'Romania',
  author_id: u2.id,
  url: "pin6.jpg"
)
p7 = Pin.create!(
  description: 'Lavender fields in Provence',
  title: 'France',
  author_id: u2.id,
  url: "pin7.jpg"
)
p8 = Pin.create!(
  description: 'Nice',
  title: 'Nice',
  author_id: u2.id,
  url: "pin8.jpg"
)
p10 = Pin.create!(
  description: 'Halloween is coming',
  title: 'Fall colors',
  author_id: u2.id,
  url: "pin10.jpg"
)