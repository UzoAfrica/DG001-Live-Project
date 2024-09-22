// src/tenant.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Sidebar,
  SidebarItem,
  MainContent,
  Navbar,
  SearchBar,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  Logo,
} from './styledTenantDb.ts';
import { Shop, User } from './types.ts';
import logo from '../images/logo.svg';
import { pullUsers } from '../axiosFolder/functions/tenantFunction.ts';
import { formatDate } from '../utils/convertTime.ts';

const TenantDb: React.FC = () => {
  const [users, setUsers] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSidebarItem, setActiveSidebarItem] = useState('Dashboard');

  useEffect(() => {
    const fetchShopsAndUsers = async () => {
      try {
        const tenantsResponse = await pullUsers();
        setUsers(tenantsResponse?.data.shops);
        console.log('>>>>', tenantsResponse);
        // const shops = shopsResponse.data;

        // // Get owner IDs from shops
        // const ownerIds = shops.map(shop => shop.ownerId);

        // // Check if ownerIds is not empty before fetching users
        // if (ownerIds.length > 0) {
        //   const usersResponse = await axios.get<User[]>('https://api/users', {
        //     params: { ids: ownerIds.join(',') }
        //   });
        //   const usersWithShops = usersResponse.data.map(user => {
        //     const shop = shops.find(shop => shop.ownerId === user.id);
        //     return { ...user, shopName: shop ? shop.name : '' };
        //   });

        //   setUsers(usersWithShops);
        // } else {
        //   console.warn('No owner IDs found, skipping user fetch.');
        // }
      } catch (err) {
        console.error('Failed to fetch data', err);
      }
    };
    fetchShopsAndUsers();
  }, []);

  // const filteredUsers = users.filter((user) =>
  //   user.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <>
      <Navbar>
        <Logo src={logo} alt="Logo" />
        <SearchBar
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Navbar>
      <Container>
        <Sidebar>
          {[
            'Dashboard',
            'Tenant Database',
            'Support Tickets',
            'Settings',
            'Logout',
          ].map((item) => (
            <SidebarItem
              key={item}
              active={activeSidebarItem === item}
              onClick={() => setActiveSidebarItem(item)}
            >
              {item}
            </SidebarItem>
          ))}
        </Sidebar>
        <MainContent>
          <h1>Tenant Database</h1>
          <Table>
            <thead>
              <tr>
                <TableHeader>User ID</TableHeader>
                <TableHeader>User Name</TableHeader>
                {/* <TableHeader>Age</TableHeader>
                <TableHeader>Gender</TableHeader> */}
                <TableHeader>Date Created</TableHeader>
                <TableHeader>Shop Name</TableHeader>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <TableRow key={user.User.id}>
                  <TableCell>{user.User.id.split('-')[4]}</TableCell>
                  <TableCell>{user.User.name}</TableCell>
                  {/* <TableCell>{user.age}</TableCell> */}
                  {/* <TableCell>{user.gender}</TableCell> */}
                  <TableCell>{formatDate(user.createdAt)}</TableCell>
                  <TableCell>{user.name}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </MainContent>
      </Container>
    </>
  );
};

export default TenantDb;
