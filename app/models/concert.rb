class Concert
  include Mongoid::Document
  include Mongoid::MultiParameterAttributes
  
  field :date, :type => Date
  field :club
  field :city
end
