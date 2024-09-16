// src/UserList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from './Redux/userSlice';
import User from './Redux/User';  // User'ı doğru şekilde import ettik

function UserList() {
  const dispatch = useDispatch();

  // Redux store'dan users'ı çekiyoruz
  const { users, loading, error } = useSelector((store) => store.user);

  // Bileşen yüklendiğinde kullanıcıları alıyoruz
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  // Loading durumunu kontrol edelim
  if (loading) {
    return <p>Loading...</p>;
  }

  // Error durumu varsa hata mesajı gösterelim
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Kullanıcılar boşsa mesaj gösterelim
  if (!users || users.length === 0) {
    return <p>No users found.</p>;
  }

  // Eğer kullanıcılar varsa User bileşeni ile listeyi render edelim
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;