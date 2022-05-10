import '../styles/globals.css';
import { useCallback, memo, useEffect, useState } from 'react';
import { DatePicker } from '@douyinfe/semi-ui';
const TabPanel = (props) => {
  const { children } = props;
  return (
    <>
      <p>{children}</p>
    </>
  );
};

const Tabs = memo((props) => {
  const { children, callback = () => {} } = props;
  console.log(children);
  const len = children.length;
  const [selected, seSelected] = useState(0);
  return (
    <>
      <ul style={{ listStyleType: 'none', display: 'flex', width: 200 }}>
        {children.map((child, index) => (
          <li
            key={child.key}
            style={{
              paddingRight: 20,
              color: index === selected ? '#ff0000' : '#000',
            }}
            onClick={() => {
              seSelected((c) => index);
            }}
          >
            {child.props.tab}
          </li>
        ))}
      </ul>
      {children.map((child, index) => (
        <>
          {selected === index ? (
            <div
              key={index}
              onClick={() => {
                callback();
              }}
            >
              {child}
            </div>
          ) : null}
        </>
      ))}
    </>
  );
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Tabs
        callback={() => {
          alert('ks');
        }}
      >
        <TabPanel tab="tab1" key="user">
          tab1 content
        </TabPanel>
        <TabPanel tab="tab2" key="profile">
          tab2 content
        </TabPanel>
        <TabPanel tab="tab3" key="av">
          tab3 content
        </TabPanel>
      </Tabs>
      <DatePicker onChange={(date, dateString) => console.log(dateString)} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
