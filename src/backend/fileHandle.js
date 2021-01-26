class FileHandle
{
    handleFileName (that)
    {
        document.querySelectorAll(`[for=${that.id}]`)[1].innerHTML = that.files[0].name;
    }
}

module.exports = FileHandle;