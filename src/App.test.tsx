import { mount } from 'enzyme';
import App from './App';

describe('<App/>', () => {
  let dashboardComponent : any = mount(<App/>);
  it("should display the text 'Cargando...!'", () => {
    expect(dashboardComponent.text()).toEqual("Cargando...!");
  });
});
