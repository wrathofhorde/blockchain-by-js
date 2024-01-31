function Blockchain() {
    this.chain = [];
    this.pendingTransaction = [];
    
    this.networkNodes = [];
    this.currentNodelUrl = currentNodelUrl;

    this.createNewBlock(100, '0', '0');
}
