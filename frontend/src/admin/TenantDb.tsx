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
import {Shop, User} from './types.ts'
import logo from "../images/logo.svg"


const TenantDb: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeSidebarItem, setActiveSidebarItem] = useState('Dashboard');

    useEffect(() => {
        const fetchShopsAndUsers = async () => {
            try {
                const shopsResponse = await axios.get<Shop[]>('https://api/shops');
                const shops = shopsResponse.data;
                //get owner ID from shops
                const ownerIds = shops.map(shop => shop.ownerId);
                //fetch users with shops
                const usersResponse = await axios.get<User[]>('https://api/users', {
                    params: { ids: ownerIds.join(',') }
                });
                const usersWithShops = usersResponse.data.map(user => {
                    const shop = shops.find(shop => shop.ownerId === user.id);
                    return { ...user, shopName: shop ? shop.name : '' };
                });

                setUsers(usersWithShops);
            } catch (err) {
                console.error('Failed to fetch data', err);
            }
        };

        fetchShopsAndUsers();
    }, []);

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                    {['Dashboard', 'Tenant Database', 'User Analytics', 'Product Metrics', 'Support Tickets', 'Settings',
                        'Logout'].map((item) => (
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
                <TableHeader>Age</TableHeader>
                <TableHeader>Gender</TableHeader>
                <TableHeader>Date Created</TableHeader>
                         <TableHeader>Shop Name</TableHeader>
                </tr>
                </thead><tbody>
            {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.age}</TableCell>
                    <TableCell>{user.gender}</TableCell>
                    <TableCell>{user.dateCreated}</TableCell>
                    <TableCell>{user.shopName}</TableCell>
                </TableRow>
            ))}</tbody>
                    </Table>
                 </MainContent>
            </Container>
        </>
    );
};

export default TenantDb;
