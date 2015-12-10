require 'faker'

10.times do
  Student.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name)
end

100.times do
  Badge.create(title: Faker::Lorem.sentence, votes: rand(0..100), student_id: rand(1..10))
end
