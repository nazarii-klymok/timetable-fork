const SearchIcon = ({onClick}: {onClick: Function}) => {
  return (
    <svg width="32" height="32" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => onClick()}>
      <path d="M31.9673 28.0315L25.7512 21.8164C25.4706 21.5359 25.0903 21.38 24.6913 21.38H23.675C25.3958 19.1795 26.4183 16.4117 26.4183 13.4008C26.4183 6.23821 20.6137 0.43457 13.4499 0.43457C6.28607 0.43457 0.481445 6.23821 0.481445 13.4008C0.481445 20.5634 6.28607 26.367 13.4499 26.367C16.4613 26.367 19.2296 25.3447 21.4305 23.6242V24.6403C21.4305 25.0392 21.5863 25.4195 21.8669 25.7L28.083 31.9151C28.6691 32.5011 29.6168 32.5011 30.1967 31.9151L31.9611 30.1509C32.5472 29.565 32.5472 28.6174 31.9673 28.0315ZM13.4499 21.38C9.04187 21.38 5.46931 17.8143 5.46931 13.4008C5.46931 8.99353 9.03563 5.42158 13.4499 5.42158C17.8579 5.42158 21.4305 8.9873 21.4305 13.4008C21.4305 17.8081 17.8642 21.38 13.4499 21.38Z" fill="white"/>
    </svg>
  )
}

export default SearchIcon