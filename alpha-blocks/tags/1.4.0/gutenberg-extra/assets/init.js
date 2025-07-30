document.addEventListener("alpine:init", () => {
  console.log("alpine:init");
  Alpine.store('accordionAttributes', {

  });

  Alpine.data("accordions", () => ({
    attributes:{},
    openItems: [],
    collapseOtherItems: this.attributes?.collapseOtherItems,
    init(){
      
      // Alpine.store('accordionAttributes', JSON.parse(this.$root.dataset.attributes));
      // this.collapseOtherItems = ! this.$store.accordionAttributes?.collapseOtherItems??true;
      // console.log("accordionAttributes:", this.$store.accordionAttributes.collapseOtherItems);
      // console.log("window?.multiple??true:", window?.multiple??true);

      this.$watch('attributes', _attributes => {
        this.collapseOtherItems=_attributes.collapseOtherItems;

        if(_attributes.expandFirstItem){
          var firstItemId = this.$el.querySelector(".alpha-accordion-item").id;
          this.openItems.push(firstItemId);
        }

      });
      this.attributes = JSON.parse(this.$root.dataset.attributes);
      this.accordionItem={
        [':id']() {
          return this.$id('accordion');
        },
      }
    },
    updateAttributes(attributes){
      this.attributes = attributes;
    },
    toggleMultiple(){
      this.collapseOtherItems=!this.collapseOtherItems;
    },
    accordionsWrapper:{
      ['x-effect'](){
        console.log("effect attributes changes: ", this.attributes?.collapseOtherItems);
      }
    },
    accordionItem:{},
    accordionHead:{
      ['@click']() {
        this.toggleOpen(this.$el)
    }
    },
    accordionContent:{
      ['x-collapse']() {
        return true
      },
      ['x-cloak']() {
        return true
      },
      ['x-show'](){
        return this.isOpen(this.$el) === true;
      }
    },
    closeItem:{
      ['x-show'](){
        return this.isOpen(this.$el) !== true;
      }
    },
    openItem:{
      ['x-show'](){
        return this.isOpen(this.$el) === true;
      }
    },
    clickedId(id) {
      if (this.openItems.includes(id)) {
        this.openItems = this.openItems.filter((item) => item !== id);
      } else {
        if (this.collapseOtherItems === false) {
          this.openItems = [];
        }
        this.openItems.push(id);
      }
    },
    toggleOpen($el) {
      $el
        .closest(".alpha-accordion-item")
        .classList.toggle("accordion-open");
      this.clickedId($el.closest(".alpha-accordion-item").id);
    },

    isOpen($el) {
      return this.openItems.some(
        (item) => item == $el.closest(".alpha-accordion-item").id
      );
    },
  }));
});

