def fileToString(f1, f2):
    filename1 = f1.filename
    filename2 = f2.filename
    print(type(f1))
    # read để đọc file ==> dạng bytes
    # decode ==> formart định dạng về utf-8 (string)
    res1 = f1.read().decode('utf-8')
    res2 = f2.read().decode('utf-8')
    file1_list = res1.splitlines()
    file2_list = res2.splitlines()
    return filename1, filename2, file1_list, file2_list
