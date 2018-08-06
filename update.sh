./remove.sh
./packages.sh

dpkg-scanpackages -m . /dev/null >Packages
bzip2 Packages
http://www.filepup.net/files/2694833d1533556144.html
