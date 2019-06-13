import React from 'react'
import { province } from 'antd-mobile-demo-data';
import { StickyContainer, Sticky } from 'react-sticky';
import { ListView, List, SearchBar } from 'antd-mobile';

const { Item } = List;

function genData(ds, provinceData) {
  const dataBlob = {};
  const sectionIDs = [];
  const rowIDs = [];
  Object.keys(provinceData).forEach((item, index) => {
    sectionIDs.push(item);
    dataBlob[item] = item;
    rowIDs[index] = [];

    provinceData[item].forEach((jj) => {
      rowIDs[index].push(jj.value);
      dataBlob[jj.value] = jj.label;
    });
  });
  return ds.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs);
}

export default class MobileListView extends React.Component {
  constructor(props) {
    super(props);
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.state = {
      inputValue: '',
      dataSource,
      isLoading: true,
    };
  }

  componentDidMount() {
    // simulate initial Ajax
    setTimeout(() => {
      this.setState({
        dataSource: genData(this.state.dataSource, province),
        isLoading: false,
      });
    }, 600);
  }

  onSearch = (val) => {
    const pd = { ...province };
    Object.keys(pd).forEach((item) => {
      const arr = pd[item].filter(jj => jj.spell.toLocaleLowerCase().indexOf(val) > -1);
      if (!arr.length) {
        delete pd[item];
      } else {
        pd[item] = arr;
      }
    });
    this.setState({
      inputValue: val,
      dataSource: genData(this.state.dataSource, pd),
    });
  }

  render() {
      return (
          <div style={{ paddingTop: '0px', position: 'relative' }}>
              <ListView.IndexedList
                  dataSource={this.state.dataSource}
                  className="am-list sticky-list"
                  useBodyScroll
                  renderSectionWrapper={sectionID => (
                      <StickyContainer
                          key={`s_${sectionID}_c`}
                          className="sticky-container"
                          style={{ zIndex: 4 }}
                      />
                  )}
                          renderSectionHeader={sectionData => (
                              <Sticky>
                                      {({
                                          style,
                                      }) => (
                                          <div
                                              className="sticky"
                                              style={{
                                                  ...style,
                                                  zIndex: 3,
                                                  backgroundColor: sectionData.charCodeAt(0) % 2 ? '#5890ff' : '#F8591A',
                                                  color: 'white',
                                              }}
                                          >{sectionData}</div>
                                      )}
                                  </Sticky>
                          )}
                                      renderHeader={() => <span>All Banks</span>}
                                          renderFooter={() => <span>End</span>}
                                              renderRow={rowData => (<Item>{rowData}</Item>)}
                                              />
                                                  </div>);
  }
}
