

export const TypePokemon = ({types}) => {
  return (
    <>
        <article>
              Type:&nbsp;
              <span>
                {types?.map(({ type }, index) => (
                  <span key={index}>
                    {type.name}
                    {types.length - 1 == index ? "." : ","}
                  </span>
                ))}
              </span>
            </article>
    </>
  )
}
