import React, { useState, useEffect } from "react";
import { Table, Button, Modal, message } from "antd";

interface User {
    id: number;
    name: string;
    email: string;
    ticketsPurchased: number;
    ticketsCancelled: number;
}

const UserManagement: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    useEffect(() => {
        // Fetch user data (replace with your API call)
        setLoading(true);
        setTimeout(() => {
            setUsers([
                { id: 1, name: "John Doe", email: "john@example.com", ticketsPurchased: 5, ticketsCancelled: 2 },
                { id: 2, name: "Jane Smith", email: "jane@example.com", ticketsPurchased: 3, ticketsCancelled: 1 },
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    const handleViewDetails = (user: User) => {
        setSelectedUser(user);
        setIsModalVisible(true);
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
        setSelectedUser(null);
    };

    const handleDeleteUser = (userId: number) => {
        // Delete user logic (replace with your API call)
        setUsers(users.filter((user) => user.id !== userId));
        message.success("User deleted successfully");
    };

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Tickets Purchased",
            dataIndex: "ticketsPurchased",
            key: "ticketsPurchased",
        },
        {
            title: "Tickets Cancelled",
            dataIndex: "ticketsCancelled",
            key: "ticketsCancelled",
        },
        {
            title: "Actions",
            key: "actions",
            render: (_: any, record: User) => (
                <>
                    <Button type="link" onClick={() => handleViewDetails(record)}>
                        View Details
                    </Button>
                    <Button type="link" danger onClick={() => handleDeleteUser(record.id)}>
                        Delete
                    </Button>
                </>
            ),
        },
    ];

    return (
        <div>
            <h1>User Management</h1>
            <Table
                dataSource={users}
                columns={columns}
                rowKey="id"
                loading={loading}
            />
            <Modal
                title="User Details"
                visible={isModalVisible}
                onCancel={handleModalClose}
                footer={[
                    <Button key="close" onClick={handleModalClose}>
                        Close
                    </Button>,
                ]}
            >
                {selectedUser && (
                    <div>
                        <p><strong>Name:</strong> {selectedUser.name}</p>
                        <p><strong>Email:</strong> {selectedUser.email}</p>
                        <p><strong>Tickets Purchased:</strong> {selectedUser.ticketsPurchased}</p>
                        <p><strong>Tickets Cancelled:</strong> {selectedUser.ticketsCancelled}</p>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default UserManagement;