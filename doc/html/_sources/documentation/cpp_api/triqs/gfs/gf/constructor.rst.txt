..
   Generated automatically by cpp2rst

.. highlight:: c
.. role:: ref
.. role:: green
.. role:: param


.. _triqs__gfs__gf__constructor:

triqs::gfs::gf::constructor
===========================

*#include <triqs/gfs/gf.hpp>*



**Synopsis**


.. container:: synop-block

   `gf` ()

.. container:: synop-block

   `gf` (gf<Var, Target> const & `x`)

.. container:: synop-block

   `gf` (gf<Var, Target> && )

.. container:: synop-block

  `gf` (gf::mesh_t `m`,
   gf::target_shape_t `shape`,
   arrays::memory_layout_t<arity + Target::rank> const & `ml`,
   gf::indices_t const & `ind` = indices_t{})

.. container:: synop-block

   `gf` (gf::mesh_t `m`, gf::data_t `dat`, gf::indices_t `ind`)

.. container:: synop-block

   `gf` (gf::mesh_t `m`,
   gf::target_shape_t `shape` = target_shape_t{},
   gf::indices_t const & `ind` = indices_t{})

.. container:: synop-block

   `gf` (gf::mesh_t `m`,
    gf::data_t `dat`,
    arrays::memory_layout_t<arity + Target::rank> const & `ml`,
    gf::indices_t `ind`)

.. container:: synop-block

   `gf` (:ref:`gf_view<triqs_gfs__gf_view>` <Var, Target> const & `g`)

.. container:: synop-block

    9. | :ref:`gf` (gf_const_view<Var, Target> const & `g`)

.. container:: synop-block

    10. | :green:`template<typename G>`
        | :ref:`gf` (G const & `g`)

.. container:: synop-block

    11. | :green:`template<typename Tag>`
        | :ref:`gf` (mpi_lazy<Tag, gf_const_view<Var, Target> > `l`)



Documentation

 **1)**   Empty Green function (with empty array).



 **8)**   Makes a deep copy of the data



 **9)**   Makes a deep copy of the data



 **10)**   From any object modeling the :ref:`concept_GreenFunction`.



 **11)**   from the mpi lazy operation. Cf MPI section !





Template parameters
^^^^^^^^^^^^^^^^^^^

 * :param:`G` A type modeling :ref:`concept_GreenFunction`.

 * :param:`Tag`


Parameters
^^^^^^^^^^

 * :param:`m` Mesh

 * :param:`shape` Target shape

 * :param:`ml` Memory layout for the *whole* data array

 * :param:`ind` Indices

 * :param:`dat` data arrray

 * :param:`g`

 * :param:`l` The lazy object

  NB : type must be the same, e.g. g2(refuce(g1)) will work only if mesh, Target, Singularity are the same...


Example
^^^^^^^

..
   Included automatically from /mnt/home/wentzell/Dropbox/Coding/triqs/doc/documentation/examples/triqs/gfs/gf_constructors_0.cpp

.. code-block:: cpp

    #include <triqs/gfs.hpp>
    using namespace triqs::gfs;
    int main() {
      auto beta = 10.0;
      gf<imfreq> gf{{beta, Fermion}, {1, 1}};
    }