<template>

  <div class="control is-expanded">
    <div class="select">
      <select class="select-source">
        <template v-if="placeholder">
          <option value="">
            {{ placeholder }}
          </option>
        </template>
        <slot />
      </select>
      <div class="form-control-select" @click="toggleSelect">{{ placeholder }}</div>
      <div class="select-panel" :class="{'is-visible': selectIsVisible}">
        <ul class="select-list">
          <li class="select-list-item">{{ placeholder }}</li>
        </ul>
      </div>
    </div>
    <!-- <span class="select" :class="spanClasses">
      <select
        v-model="computedValue"
        ref="select"
        :multiple="multiple"
        v-bind="$attrs"
        @blur="$emit('blur', $event) && checkHtml5Validity()"
        @focus="$emit('focus', $event)"
      >
        <template v-if="placeholder">
          <option
            v-if="computedValue == null"
            :value="null"
            disabled
            hidden
          >
            {{ placeholder }}
          </option>
        </template>
        <slot />

      </select>
    </span> -->
  </div>
</template>

<script>
export default {
  name: 'CustomSelect',
  props: {
    value: {
      type: [String, Number, Boolean, Object, Array, Symbol, Function],
      default: null,
    },
    placeholder: String,
    multiple: Boolean,
  },
  data() {
    return {
      selected: this.value,
      selectIsVisible: false,
    };
  },
  computed: {
    computedValue: {
      get() {
        return this.selected;
      },
      set(value) {
        this.selected = value;
        this.$emit('input', value);
      },
    },
  },
  watch: {
    value(value) {
      this.selected = value;
    },
  },
  methods: {
    toggleSelect() {
      this.selectIsVisible = !this.selectIsVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
$clr-light: darken($white, 6.5%);
$clr-lightgrey: darken($white, 25%);
$clr-dark: #404040;

.select {
  position: relative;
  margin: 15px 0;
  border: 1px solid #d0d0d0;
  width: 100%;

  &:before,
  &:after {
    border: 2px $blue solid;
    border-radius: 21px;
    content: "";
    display: none;
    opacity: 0;
    position: absolute;
    right: 7px;
    top: 7px;
    transform: scale(0.1);
    width: 21px;
    height: 21px;
    z-index: 5;
  }
  &:after {
    animation-delay: 1s;
    border-color: $blue;
  }
  &.is-loading:after {
    display: block;
  }
}

.form-control-select {
  cursor: pointer;
  min-width: 160px;
  padding: 6px 15px;
  position: relative;
  user-select: none;

  &:after {
    content: "";
    border: $clr-lightgrey solid;
    border-width: 0 2px 2px 0;
    height: 8px;
    margin-top: -6px;
    position: absolute;
    right: 18px;
    top: 50%;
    transform: rotate(45deg);
    width: 8px;
  }

  select[disabled] ~ & {
    background: $clr-light;
    opacity: 0.7;
    cursor: not-allowed;
  }

  &.of-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.select-source {
  display: none;
}

.select-panel {
  background: $white;
  border: 1px $clr-lightgrey solid;
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 3px 3px;
  display: none;
  opacity: 0;
  margin-top: 5px;
  padding: 5px;
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  transform: translate3d(0, 10px, 0);
  z-index: 12;

  &:before {
    background: $blue;
    content: "";
    height: 2px;
    position: absolute;
    left: -1px;
    right: -1px;
    top: -1px;
    z-index: 13;
  }

  &:after {
    border: 5px transparent solid;
    border-bottom-color: $blue;
    content: "";
    margin-left: -5px;
    position: absolute;
    left: 50%;
    top: -11px;
    z-index: 13;
  }
  &.is-visible {
    display: block;
    opacity: 1;
    transform: translate3d(0, 0, 0);
    z-index: 310;
  }
}

.select-list {
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  min-height: 20px;
  max-height: 186px;
  overflow: hidden;
  overflow-y: auto;
}

.select-list-item {
  cursor: pointer;
  display: block;
  line-height: 20px;
  margin-bottom: 1px;
  padding: 5px 10px;
  user-select: none;

  &:hover {
    background: $clr-light;
  }

  &.is-selected {
    background: $clr-light;
    cursor: pointer;
    position: relative;
  }
  &.is-primed {
    background: $clr-lightgrey;
  }
}

.select-nolist {
  color: $clr-dark;
  font-style: italic;
  line-height: 30px;
  margin: 0;
  padding: 0 10px;
}
</style>
