import React from 'react'
import styled from 'styled-components'
import blue from 'material-ui/colors/blue'

const SHeader = styled.header`
  padding: 1em;
  border-bottom: solid 1px ${blue[500]};
  background: white;
  h1 {
    margin: 0;
  }
`

const Header = () => (
	<SHeader>
		<h1>Mobx Todo</h1>
	</SHeader>
)

export default Header