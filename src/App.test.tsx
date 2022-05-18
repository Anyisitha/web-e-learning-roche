import { render, RenderResult } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {
  let appComponent : RenderResult;
  beforeEach(() => appComponent = render(<App/>));
  it("should display the text 'Cargando...!'", () => {
    const { getByText } = appComponent;
    expect(getByText("Cargando...!")).toBeInTheDocument();
  });
});
