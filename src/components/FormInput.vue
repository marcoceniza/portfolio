<script setup>
defineOptions({ name: 'FormInput' });

defineProps({
    type: {
        type: String, 
        default: 'text', 
        validator: val => ['text', 'email', 'password', 'number', 'search', 'tel', 'url'].includes(val)
    },
    name: { type: String, default: '' },
    id: { type: String, default: '' },
    placeholder: { type: String, default: 'Please input value' },
    modelValue: { type: [String, Number], default: '' },
    textarea: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
    <component
        :is="textarea ? 'textarea' : 'input'"
        :name="name"
        :id="id"
        :placeholder="placeholder"
        :disabled="disabled"
        :type="textarea ? undefined : type"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
        class="bg-white"
    />
</template>