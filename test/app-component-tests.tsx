import * as React from 'react'

import { AppComponent } from 'components/app'

describe("AppComponent", () => {
  it("renders", () => {
    let context = {} as any;
    let app = <AppComponent context={context} />
  });
});