// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow
// @jsx h

/**
 * <ErrorView />
 *
 * Show error message friendly. 
 */

import { h, Indent } from 'ink'


type Props = {

}

function ErrorView(props: Props) {
  
  const { error } = props  
  
  return (
    <div>
      <Indent size={2}>
        {error.message}
      </Indent>
    </div>
  )
}

export default ErrorView
