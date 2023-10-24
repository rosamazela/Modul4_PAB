// import React, { useState } from "react";
// import {
//     FlatList,
//     Image,
//     Text,
//     Modal,
//     TouchableOpacity,
//     View,
//     StyleSheet,
//     Button,
//     Alert,
// } from "react-native";

// // Dummmy Data (Array of Object)
// const datas = [
//     {
//         id: 1,
//         title:
//             "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
//         image:
//             "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
//     },
//     {
//         id: 2,
//         title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
//         image:
//             "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
//     },
//     {
//         id: 3,
//         title:
//             "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
//         image:
//             "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
//     },
//     {
//         id: 4,
//         title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
//         image:
//             "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
//     },
//     {
//         id: 5,
//         title:
//             "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
//         image:
//             "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
//     },
//     {
//         id: 6,
//         title:
//             "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
//         image:
//             "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
//     },
//     {
//         id: 7,
//         title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
//         image:
//             "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
//     },
//     {
//         id: 8,
//         title:
//             "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
//         image:
//             "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
//     },
//     {
//         id: 9,
//         title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
//         image:
//             "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
//     },
//     {
//         id: 10,
//         title:
//             "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
//         image:
//             "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
//     },
// ];

// // Functional Component
// const List = () => {
//     const [modalVisible, setModalVisible] = useState(false);
//     const [selectedItem, setSelectedItem] = useState(null);

//     const renderItem = ({ item }) => {
//         return (
//             <TouchableOpacity style={styles.view} onPress={() => {
//                 setSelectedItem(item); // Menyimpan artikel yang dipilih
//                 setModalVisible(true);
//             }}>
//                 <View>
//                     <Image source={{ uri: item.image }} style={styles.image} />
//                     <Text style={styles.text}>{item.title}</Text>
//                 </View>
//             </TouchableOpacity>
//         );
//     };

//     const renderModal = (selectedItem) => {
//         return (
//             <Modal
//                 visible={modalVisible}
//                 onRequestClose={() => {
//                     setModalVisible(false);
//                 }}
//                 transparent={true}
//             >
//                 <View style={styles.modal}>
//                     <View style={styles.modalContent}>
//                         <Text style={styles.modalText}>{selectedItem.title}</Text>
//                         <Button title="Lanjut Membaca" style={styles.showAlertButton} onPress={showAlert} />
//                         <Button title="Tutup" color="#E9B824" style={styles.closeButton} onPress={() => setModalVisible(false)} />
//                     </View>
//                 </View>
//             </Modal>
//         );
//     };

//     const showAlert = () => {
//         // menampilkan alert ketika tombol "Show Alert" diklik
//         Alert.alert("Alert", " Maaf Artikel Belum Tersedia"), [
//             { text: "OK", onPress: () => console.log("Ok Pressed") }
//         ]
//     };

//     // const renderModal = () => {
//     //     return (
//     //         <Modal
//     //             visible={modalVisible}
//     //             onRequestClose={() => {
//     //                 setModalVisible(false);
//     //             }}
//     //             transparent={true}
//     //         >
//     //             <View style={styles.modal}>
//     //                 <View style={styles.modalContent}>
//     //                     <Text>This Is Modal</Text>
//     //                     <Button title="Close" onPress={() => setModalVisible(false)} />
//     //                 </View>
//     //             </View>
//     //         </Modal>
//     //     );
//     // };


//     return (
//         <View>
//             <FlatList
//                 data={datas}
//                 renderItem={renderItem}
//                 keyExtractor={(item) => item.id}
//             />

//             {selectedItem && renderModal(selectedItem)}
//             {/* {renderModal()} */}
//         </View>
//     );
// };

// // Styles
// const styles = StyleSheet.create({
//     view: {
//         padding: 15,
//         borderBottomColor: "#dddddd",
//         borderBottomWidth: 1,
//     },
//     image: {
//         height: 200,
//         width: null,
//     },
//     text: {
//         fontSize: 18,
//         paddingTop: 10,
//     },
//     modal: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'rgba(0,0,0,0.5)',
//     },
//     modalContent: {
//         backgroundColor: 'white',
//         padding: 20,
//         borderRadius: 10,
//         width: 300,
//     },
//     Button: {
//         marginTop: 10,
//     }
// });

// export default List;