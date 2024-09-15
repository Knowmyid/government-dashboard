import React from 'react'
import classNames from 'classnames'

import {
   
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  
  CCol,
  CProgress,
  CRow,
  
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
   
  cilCloudDownload,
   
} from '@coreui/icons'
 
 

import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MainChart from './MainChart'

const Dashboard = () => {
  const CARDs = [
    { title: 'Users', value: '26,703 Users', percent: 40, color: 'success' },
    { title: "ID's Uploaded", value: '24,093 Users', percent: 20, color: 'info' },
    { title: "Verified ID's", value: '78,706 ', percent: 79, color: 'warning' },
    { title: 'New Users', value: '22,23 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ] 
  return (
    <>
      <WidgetsDropdown className="mb-4" />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Sight's
              </h4>
              <div className="small text-body-secondary">January - August 2024</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChart />
        </CCardBody>
        <CCardFooter>
          <CRow
            xs={{ cols: 1, gutter: 4 }}
            sm={{ cols: 2 }}
            lg={{ cols: 4 }}
            xl={{ cols: 5 }}
            className="mb-2 text-center"
          >
            {CARDs.map((item, index, items) => (
              <CCol
                className={classNames({
                  'd-none d-xl-block': index + 1 === items.length,
                })}
                key={index}
              >
                <div className="text-body-secondary">{item.title}</div>
                <div className="fw-semibold text-truncate">
                  {item.value} ({item.percent}%)
                </div>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>
    </>
  )
}
export default Dashboard