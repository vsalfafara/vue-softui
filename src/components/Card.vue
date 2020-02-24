<template>
    <div class="container">
        <div class="row">
            <div class="card neo">
                <div class="card__header">
                    <div class="card__header__title">Card Header</div>
                    <div class="card__header__subtitle">Card Subheader</div>
                </div>
                <div class="card__content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga accusantium mollitia eum, asperiores provident aspernatur facere consequuntur beatae exercitationem molestias.</div>
                <div class="card__action">
                    <button>Action</button>
                    <button>Action</button>
                </div>
            </div>
            <div class="card neo">
                <div class="card__header">
                    <div class="card__header__title">Card Header</div>
                    <div class="card__header__subtitle">Card Subheader</div>
                </div>
                <div class="card__content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga accusantium mollitia eum, asperiores provident aspernatur facere consequuntur beatae exercitationem molestias.</div>
                <div class="card__action">
                    <button>Action</button>
                    <button>Action</button>
                </div>
            </div>
            <div class="card neo">
                <div class="card__header">
                    <div class="card__header__title">Card Header</div>
                    <div class="card__header__subtitle">Card Subheader</div>
                </div>
                <div class="card__content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga accusantium mollitia eum, asperiores provident aspernatur facere consequuntur beatae exercitationem molestias.</div>
                <div class="card__action">
                    <button>Action</button>
                    <button>Action</button>
                </div>
            </div>
        </div>
        <div class="row">
            
            <div class="card neo">
                <div class="card__header">
                    <div class="card__header__title">Card Header</div>
                    <div class="card__header__subtitle">Card Subheader</div>
                </div>
                <div class="card__content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga accusantium mollitia eum, asperiores provident aspernatur facere consequuntur beatae exercitationem molestias.</div>
                <div class="card__action">
                    <button>Action</button>
                    <button>Action</button>
                </div>
            </div>
            <div class="card neo">
                <div class="card__header">
                    <div class="card__header__title">Card Header</div>
                    <div class="card__header__subtitle">Card Subheader</div>
                </div>
                <div class="card__content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga accusantium mollitia eum, asperiores provident aspernatur facere consequuntur beatae exercitationem molestias.</div>
                <div class="card__action">
                    <button>Action</button>
                    <button>Action</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card'
}
</script>

<style lang="scss" scoped>

    $white: #fff;
    $shadow: rgb(218, 218, 218);
    $dark: rgb(82, 82, 82);
    $neomorph-background: rgb(245, 245, 245);
    $box-shadow: 
        -5px -5px 10px 0 $white,
        5px 5px 10px 0 $shadow;
    $box-shadow-inset: 
        -5px -5px 10px 0 $white inset,
        5px 5px 10px 0 $shadow inset;

    .row {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        .card {
            padding: 1em;
            border-radius: 1em;
            margin: 1em;
            color: $dark;

            &__header {
                margin-bottom: 2em;

                &__title {
                    font-size: 2em;
                    font-weight: 600;
                    margin-bottom: .3em;
                }
                
                &__subtitle {
                    font-size: .8em;
                    // font-weight: 100;
                    color: rgb(126, 126, 126);
                }
            }

            &__content {
                margin-bottom: 2em;
            }

            &__action {
                display: flex;
                justify-content: flex-end;
            }
        }
    }

    @media screen and (min-width: 1000px) {
        .row {
            flex-direction: row;
            justify-content: space-evenly;

            .card {
                max-width: 400px;
            }
        }
    }
</style>