import './App.css';

import { useState, useEffect } from 'react';

import * as wjCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.react.grid';
import * as wjcInput from '@grapecity/wijmo.react.input';

function App() {
  const [cv, setCollectionView] = useState(new wjCore.CollectionView([], {}));
  useEffect(() => {
    fetch('https://mocki.io/v1/eaf8d0a8-052c-4d2a-b105-da40855634fa').then(response => response.json()).then(data => cv.sourceCollection = data);
  });
  return (
    <div className="App">
      <h2>ComboBox Blog</h2>
      <wjcInput.ComboBox displayMemberPath="country" headerPath="country" itemsSource={cv} dropDownCssClass="combo-dropdown" wjItemTemplate={(context) => (
        <div className="item">
          <div className="itemHeader">
            <img src={context.item.flag} alt="" /><b>{context.item.country}</b>
          </div>
          Sales: <b>${context.item.sales}</b><br/>
          Expenses: <b>${context.item.expenses}</b>
        </div>
      )}></wjcInput.ComboBox><br/><br/>
      <wjcGrid.FlexGrid itemsSource={cv} selectionMode="Row">
        <wjcGrid.FlexGridColumn binding="country" header="Country" width="*"></wjcGrid.FlexGridColumn>
        <wjcGrid.FlexGridColumn binding="sales" header="Sales" width="*" format="c2"></wjcGrid.FlexGridColumn>
        <wjcGrid.FlexGridColumn binding="expenses" header="Expenses" width="*" format="c2"></wjcGrid.FlexGridColumn>
      </wjcGrid.FlexGrid>
    </div>
  );
}

export default App;
