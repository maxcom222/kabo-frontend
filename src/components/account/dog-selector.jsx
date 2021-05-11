export default function DogSelector({ dogs, setDog, dogIndex }) {
  const dogDivs = dogs.map((dog, i) => (
    <div key={i}
      onClick={() => setDog(i)}
      className={`inline-flex cursor-pointer justify-center items-center ${dogIndex === i ? 'bg-primary text-white' : 'text-charcoal'} w-1/2`}
    >
      {dog.name}
    </div>
  ))
  return (
    <div className="rounded overflow-hidden flex h-7 mb-7 border border-gray-200">
      {dogDivs}
    </div>
  )
}
