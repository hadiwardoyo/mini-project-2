
const MainContent = () => {
    return (
        <div className='container p-3'>
            <Routes>
                <Route path='' element={
                    <HomePage></HomePage>
                }></Route>
                <Route path='lecturers' element={<Lecturer></Lecturer>}>
                    <Route path='' element={<ListLecturers></ListLecturers>}></Route>
                    <Route path='create' element={<CreateLecturer></CreateLecturer>}></Route>
                    <Route path='edit'>
                        <Route path=':id' element={<EditLecturer></EditLecturer>}></Route>
                    </Route>
                </Route>
                <Route path='students' element={
                    <Student></Student>
                }></Route>
            </Routes>
        </div >
    )
}