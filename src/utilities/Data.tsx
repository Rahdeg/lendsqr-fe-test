import {HiUsers} from 'react-icons/hi'
import {FaUsers,FaHandshake} from 'react-icons/fa'
import {VscOrganization} from 'react-icons/vsc'
import {FaCoins} from 'react-icons/fa'
import {GrTransaction,GrServices} from 'react-icons/gr'
import {RiFilePaper2Line} from 'react-icons/ri'
import {FcMoneyTransfer} from 'react-icons/fc'
import {MdOutlineSavings,MdMedicalServices} from 'react-icons/md'
import {GiReceiveMoney,GiSettingsKnobs} from 'react-icons/gi'
import {GoChecklist} from 'react-icons/go'
import {AiOutlineBarChart} from 'react-icons/ai'
import {IoPricetagOutline} from 'react-icons/io5'
import {VscChecklist} from 'react-icons/vsc'
import {TbFileDatabase} from 'react-icons/tb'



export const User = [
    {
        id : 1,
        name:"name",
        icon:"icon",
        digit:"number",
    },
    {
        id : 2,
        name:"name",
        icon:"icon",
        digit:"number",
    },
    {
        id : 3,
        name:"name",
        icon:"icon",
        digit:"number",
    },
    {
        id : 4,
        name:"name",
        icon:"icon",
        digit:"number",
    },


]

export const links = [
    {
      title: 'CUSTOMERS',
      links: [
        {
          name: 'Users',
          address: '/dashboard/users',
          icon: <HiUsers/>,
        },
        {
            name: 'Guarantors',
            address: '/dashboard/user',
            icon: <FaUsers/>,
          },
          {
            name: 'Loans',
            address: '/dashboard/user',
            icon: <FcMoneyTransfer/>,
          },
          {
            name: 'Decision Models',
            address: '/dashboard/user',
            icon: <FaHandshake/>,
          },
          {
            name: 'Savings',
            address: '/dashboard/user',
            icon: <MdOutlineSavings/>,
          },
          {
            name: 'Loan Request',
            address: '/dashboard/user',
            icon: <GiReceiveMoney/>,
          },
          {
            name: 'Whitelist',
            address: '/dashboard/user',
            icon: <GoChecklist/>,
          },
          {
            name: 'Karma',
            address: '/dashboard/user',
            icon: <GoChecklist/>,
          },
      ],
    },
  
    {
      title: 'BUSINESSES',
      links: [
        {
          name: 'Organization',
          address: '/dashboard/user',
          icon: <VscOrganization/>,
        },
        {
            name: 'Loan Products',
            address: '/dashboard/user',
            icon: <GiReceiveMoney/>,
        },
        {
          name: 'Fees and Charges',
          address: '/dashboard/user',
          icon: <FaCoins/>,
        },
        {
            name: 'Transaction',
            address: '/dashboard/user',
            icon: <GrTransaction/>,
          },
          {
            name: 'Services',
            address: '/dashboard/user',
            icon: <GrServices/>,
          },
          {
            name: 'Service Account',
            address: '/dashboard/user',
            icon: <MdMedicalServices/>,
          },
          {
            name: 'Settlements',
            address: '/dashboard/user',
            icon: <RiFilePaper2Line/>,
          },
          {
            name: 'Report',
            address: '/dashboard/user',
            icon: <AiOutlineBarChart/>,
          },
      ],
    },
    {
      title: 'SETTINGS',
      links: [
        {
          name: 'Preferences',
          address: '/dashboard/user',
          icon: <GiSettingsKnobs />,
        },
        {
          name: 'Fees and Pricing',
          address: '/dashboard/user',
          icon: <IoPricetagOutline />,
        },
        {
          name: 'Audit Logs',
          address: '/dashboard/user',
          icon: <VscChecklist />,
        },
      ],
    },
    
  ];

  export const users = [
    {
      id: 1,
      icon: <HiUsers />,
      name: "USERS",
      number: "2,453",
      bg:"#DF18FF"
    },
    {
      id: 2,
      icon: <FaUsers />,
      name: "ACTIVE USERS",
      number: "2,453",
      bg:"#5718FF"
    },
    {
      id: 3,
      icon: <TbFileDatabase />,
      name: "USERS WITH LOANS",
      number: "12,243",
      bg:"#F55F44"
    },
    {
      id: 4,
      icon: <MdOutlineSavings />,
      name: "USERS WITH SAVINGS",
      number: "102,453",
      bg:"#FF3366"
    },

  ];
  